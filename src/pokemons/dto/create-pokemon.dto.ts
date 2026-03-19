import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreatePokemonDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    hp?:number;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    sprites?: string[];

}
