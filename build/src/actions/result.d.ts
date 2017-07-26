import { SpecQueryGroup } from 'compassql/build/src/model';
import { ThunkAction } from 'redux-thunk';
import { PlotObject } from '../models/plot';
import { ReduxAction } from './redux-action';
import { Query } from 'compassql/build/src/query/query';
import { State } from '../models/index';
export declare type ResultAction = ResultRequest | ResultReceive;
export declare type ResultAsyncAction = AsyncResultRequest;
export declare type ResultType = 'main';
export declare const RESULT_REQUEST = "RESULT_REQUEST";
export declare type ResultRequest = ReduxAction<typeof RESULT_REQUEST, {
    resultType: ResultType;
}>;
export declare const RESULT_RECEIVE = "RESULT_RECEIVE";
export declare type ResultReceive = ReduxAction<typeof RESULT_RECEIVE, {
    resultType: ResultType;
    modelGroup: SpecQueryGroup<PlotObject>;
}>;
export declare type AsyncResultRequest = ThunkAction<void, State, undefined>;
export declare function resultRequest(resultType: ResultType, query: Query): AsyncResultRequest;
