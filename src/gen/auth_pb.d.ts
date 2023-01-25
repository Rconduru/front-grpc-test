import * as jspb from 'google-protobuf'



export class Auth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Auth.AsObject;
  static toObject(includeInstance: boolean, msg: Auth): Auth.AsObject;
  static serializeBinaryToWriter(message: Auth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Auth;
  static deserializeBinaryFromReader(message: Auth, reader: jspb.BinaryReader): Auth;
}

export namespace Auth {
  export type AsObject = {
  }

  export class VerifyEmailRequest extends jspb.Message {
    getEmail(): string;
    setEmail(value: string): VerifyEmailRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
    static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
    static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
  }

  export namespace VerifyEmailRequest {
    export type AsObject = {
      email: string,
    }
  }


  export class VerifyEmailDataResponse extends jspb.Message {
    getEmailVerified(): boolean;
    setEmailVerified(value: boolean): VerifyEmailDataResponse;

    getPhoneNumber(): string;
    setPhoneNumber(value: string): VerifyEmailDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyEmailDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyEmailDataResponse): VerifyEmailDataResponse.AsObject;
    static serializeBinaryToWriter(message: VerifyEmailDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyEmailDataResponse;
    static deserializeBinaryFromReader(message: VerifyEmailDataResponse, reader: jspb.BinaryReader): VerifyEmailDataResponse;
  }

  export namespace VerifyEmailDataResponse {
    export type AsObject = {
      emailVerified: boolean,
      phoneNumber: string,
    }
  }


  export class VerifyEmailResponse extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): VerifyEmailResponse;

    getData(): Auth.VerifyEmailDataResponse | undefined;
    setData(value?: Auth.VerifyEmailDataResponse): VerifyEmailResponse;
    hasData(): boolean;
    clearData(): VerifyEmailResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyEmailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyEmailResponse): VerifyEmailResponse.AsObject;
    static serializeBinaryToWriter(message: VerifyEmailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyEmailResponse;
    static deserializeBinaryFromReader(message: VerifyEmailResponse, reader: jspb.BinaryReader): VerifyEmailResponse;
  }

  export namespace VerifyEmailResponse {
    export type AsObject = {
      message: string,
      data?: Auth.VerifyEmailDataResponse.AsObject,
    }
  }


  export class SignUpRequest extends jspb.Message {
    getName(): string;
    setName(value: string): SignUpRequest;

    getEmail(): string;
    setEmail(value: string): SignUpRequest;

    getBirthDate(): string;
    setBirthDate(value: string): SignUpRequest;

    getPhoneNumber(): string;
    setPhoneNumber(value: string): SignUpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
    static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRequest;
    static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
  }

  export namespace SignUpRequest {
    export type AsObject = {
      name: string,
      email: string,
      birthDate: string,
      phoneNumber: string,
    }
  }


  export class SignUpDataResponse extends jspb.Message {
    getUid(): string;
    setUid(value: string): SignUpDataResponse;

    getEmail(): string;
    setEmail(value: string): SignUpDataResponse;

    getVerificationCode(): string;
    setVerificationCode(value: string): SignUpDataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpDataResponse): SignUpDataResponse.AsObject;
    static serializeBinaryToWriter(message: SignUpDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpDataResponse;
    static deserializeBinaryFromReader(message: SignUpDataResponse, reader: jspb.BinaryReader): SignUpDataResponse;
  }

  export namespace SignUpDataResponse {
    export type AsObject = {
      uid: string,
      email: string,
      verificationCode: string,
    }
  }


  export class SignUpResponse extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): SignUpResponse;

    getData(): Auth.SignUpDataResponse | undefined;
    setData(value?: Auth.SignUpDataResponse): SignUpResponse;
    hasData(): boolean;
    clearData(): SignUpResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpResponse): SignUpResponse.AsObject;
    static serializeBinaryToWriter(message: SignUpResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpResponse;
    static deserializeBinaryFromReader(message: SignUpResponse, reader: jspb.BinaryReader): SignUpResponse;
  }

  export namespace SignUpResponse {
    export type AsObject = {
      message: string,
      data?: Auth.SignUpDataResponse.AsObject,
    }
  }

}

