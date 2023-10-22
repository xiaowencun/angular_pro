import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  DetachedRouteHandle
} from '@angular/router';

/**
 * 此服务用于缓存路由组件
 * 
 * 根据路由参数 data[reuse] 判断是否需要缓存
 * 
 * 路由复用策略RouteReuseStrategy
 */

const pathFunc = (currentPath:string | undefined ,parentPath:string | undefined ):string => {
  let path = "";
  if(parentPath !== null && parentPath !== undefined && currentPath !== null && currentPath !== undefined){
    path = parentPath+currentPath;
  }else if(currentPath !== null && currentPath !== undefined){
    path = currentPath;
  }
  return path;
}

interface iCacheRouters {
  snapshot: ActivatedRouteSnapshot
  handle: DetachedRouteHandle
}

@Injectable()
export class KeepAliveService implements RouteReuseStrategy {

  public cacheRouters:{[key:string]:iCacheRouters} = {};

  //表示对路由允许复用
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    //默认对所有路由复用 可通过给路由配置项增加data: { reuse: true }来进行选择性使用，代码如下
    //如果是懒加载路由需要在生命组件的位置进行配置
    // {path: 'search', component: SearchComponent, data: {reuse: true}},
    if (!route.data["reuse"]) {
      return false;
    }else{
      return true;
    }
  }

  //当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const currentPath = route.routeConfig?.path;
    const parentPath = route.parent?.routeConfig?.path;     
    const path = pathFunc(currentPath,parentPath); 
    if (path) {
      this.cacheRouters[path] = {
        snapshot:route,
        handle:handle
      }
    }    
  }

  //若path在缓存中有的都认为允许还原路由
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const currentPath = route.routeConfig?.path;
    const parentPath = route.parent?.routeConfig?.path;     
    const path = pathFunc(currentPath,parentPath);
    if(path){
      // 变更用户重新登录，需要清楚缓存， 根据具体的登录路由来确定
      // 在路由是login的时候清空缓存,login需要特殊判断
      if(currentPath === 'login'){ 
        this.cacheRouters = {};
      }
      return !!this.cacheRouters[path]
    }
    return false
}


  // 从缓存中获取快照，若无则返回null
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle| null {
    const currentPath = route.routeConfig?.path;
    const parentPath = route.parent?.routeConfig?.path;     
    const path = pathFunc(currentPath,parentPath);    
    if (!route.routeConfig) return null;
    if (route.routeConfig.loadChildren) return null; //在loadChildren路径上通过修改自定义RouteReuseStrategy中的检索函数时从不检索分离的路由。
    if(path){
      return this.cacheRouters[path].handle;
    }
    return null
  }

  //进入路由触发，判断是否同一路由
  shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === current.routeConfig;
  }

}
