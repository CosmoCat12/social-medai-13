export interface IUser {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: Date;
  city: string;
}

export interface IPost {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: Date;
  user_fk: IUser;
  photos: [
    {
      photo_id: 49;
      photo_url: "/api/photo_api/photos/49.jpg";
    }
  ];
  comments: string[];
}

export interface IGetUserResponse {
  status: number;
  message: IUser;
}

export interface ILoginUserResponce {
  message: string;
  status: 1 | 0;
  user_id: number;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface IRegisterUserResponce extends ILoginUserResponce {}

export interface IRegisterUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

//? POSTS

// Get
export interface IGetPostByIdResponce {
  status: number;
  message: IPost;
}

export interface IGetAllPostsResponce {
  status: number;
  message: IPost[];
}

//* Create

export interface ICreatePostResponce {
  status: number;
  post_id: number;
}
export interface ICreatePostPayload {
  user_id: number;
  main_text: string;
}

//* Update

export interface IUpdatePostResponce {
  status: number;
  message: string;
}
export interface IUpdatePostPayload {
  post_id: number;
  new_text: string;
}

//* Delete

export interface IDeletePostResponce extends IUpdatePostResponce {}
export interface IDeletePostPayload {}

export interface ISubscriber {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export type IGetSubscribersResponce = ISubscriber[];
