import { Type } from '@nestjs/common';

interface ApiBodyMetadata {
  type?: Type<unknown> | string;
}

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

class organizationCreateProps {
  data: Array<any>;
}

export const BodyCreateOptions: ApiBodyMetadata = {
  type: organizationCreateProps,
};
