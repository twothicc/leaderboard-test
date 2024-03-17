export class CreateQuestionDto {
    readonly id: number;
    readonly description: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }
}