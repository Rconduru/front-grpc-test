/**
 * @fileoverview gRPC-Web generated client stub for pomwm.wealth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as wealth_pb from './wealth_pb';


export class WealthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetWealthResume = new grpcWeb.MethodDescriptor(
    '/pomwm.wealth.WealthService/GetWealthResume',
    grpcWeb.MethodType.UNARY,
    wealth_pb.Wealth.GetResumeRequest,
    wealth_pb.Wealth.GetResumeResponse,
    (request: wealth_pb.Wealth.GetResumeRequest) => {
      return request.serializeBinary();
    },
    wealth_pb.Wealth.GetResumeResponse.deserializeBinary
  );

  getWealthResume(
    request: wealth_pb.Wealth.GetResumeRequest,
    metadata: grpcWeb.Metadata | null): Promise<wealth_pb.Wealth.GetResumeResponse>;

  getWealthResume(
    request: wealth_pb.Wealth.GetResumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: wealth_pb.Wealth.GetResumeResponse) => void): grpcWeb.ClientReadableStream<wealth_pb.Wealth.GetResumeResponse>;

  getWealthResume(
    request: wealth_pb.Wealth.GetResumeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: wealth_pb.Wealth.GetResumeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pomwm.wealth.WealthService/GetWealthResume',
        request,
        metadata || {},
        this.methodInfoGetWealthResume,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pomwm.wealth.WealthService/GetWealthResume',
    request,
    metadata || {},
    this.methodInfoGetWealthResume);
  }

}

