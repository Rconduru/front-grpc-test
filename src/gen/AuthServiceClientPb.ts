/**
 * @fileoverview gRPC-Web generated client stub for pomwm.auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb';


export class AuthServiceClient {
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

  methodInfoVerifyEmail = new grpcWeb.MethodDescriptor(
    '/pomwm.auth.AuthService/VerifyEmail',
    grpcWeb.MethodType.UNARY,
    auth_pb.Auth.VerifyEmailRequest,
    auth_pb.Auth.VerifyEmailResponse,
    (request: auth_pb.Auth.VerifyEmailRequest) => {
      return request.serializeBinary();
    },
    auth_pb.Auth.VerifyEmailResponse.deserializeBinary
  );

  verifyEmail(
    request: auth_pb.Auth.VerifyEmailRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.Auth.VerifyEmailResponse>;

  verifyEmail(
    request: auth_pb.Auth.VerifyEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.Auth.VerifyEmailResponse) => void): grpcWeb.ClientReadableStream<auth_pb.Auth.VerifyEmailResponse>;

  verifyEmail(
    request: auth_pb.Auth.VerifyEmailRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.Auth.VerifyEmailResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pomwm.auth.AuthService/VerifyEmail',
        request,
        metadata || {},
        this.methodInfoVerifyEmail,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pomwm.auth.AuthService/VerifyEmail',
    request,
    metadata || {},
    this.methodInfoVerifyEmail);
  }

  methodInfoSignUp = new grpcWeb.MethodDescriptor(
    '/pomwm.auth.AuthService/SignUp',
    grpcWeb.MethodType.UNARY,
    auth_pb.Auth.SignUpRequest,
    auth_pb.Auth.SignUpResponse,
    (request: auth_pb.Auth.SignUpRequest) => {
      return request.serializeBinary();
    },
    auth_pb.Auth.SignUpResponse.deserializeBinary
  );

  signUp(
    request: auth_pb.Auth.SignUpRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.Auth.SignUpResponse>;

  signUp(
    request: auth_pb.Auth.SignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.Auth.SignUpResponse) => void): grpcWeb.ClientReadableStream<auth_pb.Auth.SignUpResponse>;

  signUp(
    request: auth_pb.Auth.SignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.Auth.SignUpResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pomwm.auth.AuthService/SignUp',
        request,
        metadata || {},
        this.methodInfoSignUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pomwm.auth.AuthService/SignUp',
    request,
    metadata || {},
    this.methodInfoSignUp);
  }

}

