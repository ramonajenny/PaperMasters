import { call, put, takeEvery, delay, all, takeLatest, select} from 'redux-saga/effects';
import Web3 from "web3";
import {mintNFIAsyncAction} from "./MintNFISlice";
import {totalDepositsToContractAsyncAction} from "./MoniesSlice";


//also I have an import { call, put, takeEvery, delay, all, takeLatest, select} from 'redux-saga/effects';
// import Web3 from "web3";
//
// event Withdraw

function* depositSaga(){

};


function* withdrawSaga(){

};

function* getBalanceSaga(){

};

export function* watchMoniesSaga() {
    yield takeLatest(totalDepositsToContractAsyncAction.type, depositSaga);


}

