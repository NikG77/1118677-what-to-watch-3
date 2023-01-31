import {IsString, Length} from 'class-validator';
export default class UpdateUserDto {
  @IsString({message: 'avatarPath is required'})
  public avatarPath?: string;

  @IsString({message: 'firstname is required'})
  @Length(1, 15, {message: 'Min length is 1, max is 15'})
  public firstname?: string;
}
