import {IsMongoId, IsString, Length} from 'class-validator';

export default class CreateCommentDto {
  @IsString({message: 'text is required'})
  @Length(5, 1024, {message: 'Min length is 5, max is 1024'})
  public text!: string;

  @IsMongoId({message: 'movieId field must be a valid id'})
  public movieId!: string;

  @IsMongoId({message: 'userId field must be a valid id'})
  public userId!: string;
}
