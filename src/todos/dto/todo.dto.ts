import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => ID)
  id: string;
  @Field()
  content: string;
  @Field()
  checked: Boolean;
}

@ObjectType()
export class DeleteTodoResponse {
  @Field()
  readonly ok: boolean;
  @Field({ nullable: true })
  readonly error?: string;
}
