import { Dispatch, Middleware, AnyAction } from 'redux';
import { Observable } from 'rxjs/Observable';
import { EventSource, DispatcherOptions } from 'command-bus';
export interface Epic<S> {
    (ev: EventSource, state$: Observable<S>): Observable<any>;
}
export interface EpicMiddlewareOptions extends DispatcherOptions {
}
export declare const createEpicMiddleware: <T>(epic: Epic<T>, opts?: EpicMiddlewareOptions) => Middleware<{}, any, Dispatch<AnyAction>> & {
    replaceEpic: (nextEpic: Epic<T>) => Epic<T>;
};
