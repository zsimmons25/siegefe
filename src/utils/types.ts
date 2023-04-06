export interface AccountResponse {
    user: {
      id: string;
      username: string;
      email: boolean;
      created: Date;
      updated: Date;
    };
    access: string;
    refresh: string;
  }