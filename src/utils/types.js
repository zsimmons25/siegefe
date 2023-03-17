export interface AccountResponse {
    user: {
      id: string;
      user: string;
      is_active: boolean;
      created: Date;
      updated: Date;
    };
    access: string;
    refresh: string;
  }