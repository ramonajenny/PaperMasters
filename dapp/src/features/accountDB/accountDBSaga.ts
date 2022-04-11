import {SagaIterator} from "redux-saga";
import axios from "axios";
import {PayloadAction} from "@reduxjs/toolkit";
import { call, put, takeEvery, takeLatest, select} from 'redux-saga/effects';
import MintABI from "../../abiFiles/PaperMastersNFI.json";
import {
    paramsWalletAcc, paramsWalletAccAction, requestAccountDictionaryAction, requestReceiptUsingParams,
     requestReceiptSagaAction,
    requestAccountDictionary,
     getReceiptDBConnectUserAction, getReceiptDBCurrentUser, putDBAccountDictionaryAction,
    accountError,
} from "./AccountDBSlice";
import Web3 from "web3";
import {BCStruct} from "../receiptBC/structBCSlice.types";
import {accountArr} from "../accountBC/AccountBCSlice";
const web3 = new Web3('https://api.s0.b.hmny.io');
const baseURL = 'https://ociuozqx85.execute-api.us-east-1.amazonaws.com';
const NFIContract = new web3.eth.Contract(MintABI.abi as any, MintABI.networks['1666700000'].address);

function* getOneAccountFromDBSaga(): SagaIterator {
    try{
        const getOneDBWallet = yield call(axios.get, `${baseURL}/account/{walletAccount}`);
        yield put(getOneWalletFromDB(getOneDBWallet.data.Items[0] as accountDictionaryInterface));
        console.log ('this is the type of getOneDBWallet:', getOneDBWallet);
    } catch (e) {
        console.log(`this is the getOneWalletFromDBSaga ERROR catch: ${e}`);
    }
}

function* getAllAccountFromDBSaga(): SagaIterator {
    try{
        const getDBWallet = yield call(axios.get, `${baseURL}/account`);
        yield put(getAllWalletFromDB(getDBWallet.data.Items as accountDictionaryInterface[]));
        console.log ('this is the type of getBDWallet:', getDBWallet);
    } catch (e) {
        console.log(`this is the getWalletFromDBSaga ERROR catch: ${e}`);
    }
}

function* getOneReceiptFromDBSaga({ payload }: PayloadAction<string>): SagaIterator {
    try{
        const getOneDBReceipt = yield call(axios.get, `${baseURL}/receipt/${payload}`);
        yield put(getOneReceiptFromDB(getOneDBReceipt.data.Items[0] as IdentityDictionaryInterface));
        console.log ('this is the type of getOneDBreceipt:', getOneDBReceipt);
    } catch (e) {
        console.log(`this is the getOneReceiptFromDBSaga ERROR catch: ${e}`);
    }
}

function* getAllReceiptsFromDBSaga(): SagaIterator {
    try{
        const getAllDBReceipt = yield call(axios.get, `${baseURL}/receipt`);
        yield put(getAllReceiptFromDB(getAllDBReceipt.data.Items as IdentityDictionaryInterface[]));
        console.log ('this is the type of getAllDBreceipt:', getAllDBReceipt);
    } catch (e) {
        console.log(`this is the getAllReceiptsFromDBSaga ERROR catch: ${e}`);
    }
}

function* identPageSaga({payload}: PayloadAction<string>): SagaIterator {
    try {
        yield put(paramsWalletAcc(""));
        yield put(requestStructUsingParamsFromBC({
            walletAccount: "",
            name: "",
            email: "",
            profession: "",
            organization: "",
            slogan: "",
            website: "",
            uniqueYou: "",
            bgRGB: "",
            originDate: "",}));
        yield put(requestReceiptUsingParams({ walletAccount: "", gasUsed: "", contractAccount: "", transactionHash: "", tokenID: "", timeStamp: "", contractFee: "", identityStruct: []}));
        yield put(requestAccountDictionary({
            emailReportNotification: false,
            emailValidationNotification: false,
            linkToFinishedAvatar: "",
            ownerDescription: "",
            ownerEmail: "",
            ownerName: "",
            walletAccount: "",
            walletAccountLink: "",
            identityStruct: []
        }));
        if (payload.length > 0) {
            yield put(paramsWalletAcc(payload));
            yield put(addressHasTokenBoolAction(payload));
            yield put(requestAccountDictionaryAction(payload));
            yield put(requestReceiptSagaAction(payload));
        }
    } catch (identUseParmsFailed: any) {
        console.log('identuseParamsSagaFailed', identUseParmsFailed);
    }
}


function* requestAccountDictionarySaga({payload}: PayloadAction<string>): SagaIterator {
    try{
        const requestAccountDic = yield call(axios.get, `${baseURL}/account/${payload}`);
        yield put(requestAccountDictionary(requestAccountDic.data.Item));
        console.log ('requestAccountDictionaryAction:', requestAccountDic);
    } catch (e: unknown) {
        console.log('requestAccountDictionaryAction ERROR catch:', e);
    }
}

function* requestReceiptSaga({payload}: PayloadAction<   >): SagaIterator {
    try{
        console.log('requestReceiptUsingParamsSaga actionObject:', payload);
        const requestReceiptParams = yield call(axios.get, `${baseURL}/receipt/${payload}`);
        console.log('requestReceiptParams from Saga:', requestReceiptParams)
        yield put(requestReceiptUsingParams(requestReceiptParams.data.Item));
        console.log ('requestReceiptParams:', requestReceiptParams);
    } catch (e: unknown) {
        console.log('requestReceiptParams ERROR catch:', e);
    }
}

function* getReceiptDBConnectedUserSaga({payload}: PayloadAction<   >): SagaIterator {
    try {
        const requestAccountArr: string[] = yield select(accountArr);
        if (requestaccountArr.length !== 0) {
            const receiptDBCurrentUser = yield call(axios.get, `${baseURL}/receipt/${requestAccountArr[0]}`);
            console.log("this is the receipt from DB:");
            console.table(receiptDBCurrentUser);
            yield put(getReceiptDBCurrentUser(receiptDBCurrentUser.data.Item))
        }
    } catch(receiptDBFailed: any){
        yield put(getReceiptDBCurrentUser(""));
    }
}

function* putDBAccountDictionarySaga({payload}: PayloadAction<   >): SagaIterator { } {
    console.log("this is the actionObject:")
    console.log(typeof (actionObject))
    console.log(actionObject)
    try {
        const axiosPUT = yield call(axios.put, `${baseURL}/account`, actionObject.payload)
        console.log(axiosPUT)
        //yield put(getDBAccountDictionaryAction())
    } catch(createBDFailed: any){
        yield put(accountError(createBDFailed.message))
        console.log(createBDFailed);
    }
}

export function* watchAccountSaga(): SagaIterator {
    yield takeEvery(getAccountArrAction.type, getAccountArrSaga);
    yield takeEvery(putAccountArrInDBAction.type, putAccountArrInDBSaga);

    yield takeEvery(getOneAccountFromDBAction.type, getOneAccountFromDBSaga);
    yield takeEvery(getAllAccountFromDBAction.type, getAllAccountFromDBSaga);

    yield takeEvery(getOneReceiptFromDBAction.type, getOneReceiptFromDBSaga);
    yield takeEvery(getAllReceiptFromDBAction.type, getAllReceiptsFromDBSaga);

    yield takeLatest(paramsWalletAccAction.type, identPageSaga);
    yield takeLatest(requestReceiptSagaAction.type, requestReceiptSaga);
    yield takeLatest(requestAccountDictionaryAction.type, requestAccountDictionarySaga);

    yield takeLatest(putDBAccountDictionaryAction.type, putDBAccountDictionarySaga);
    yield takeLatest(getReceiptDBConnectUserAction.type, getReceiptDBConnectedUserSaga);
}

