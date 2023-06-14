import { IsNotEmpty, IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class CreatePlacePropertiesDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:'Place Id',
    example:'1'
  })
  placeId: string;

  @IsNotEmpty()
  @ApiProperty({
    description:'Price',
    example:{smoke:true,crowded:true,speedInternet:true},
  })
  propertyId: string;
}
