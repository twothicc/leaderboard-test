import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from '../service/admin.service';
import { Student } from 'src/model/student.entity';
import { CreateQuestionDto } from 'src/dto/create-question.dto';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('admin')
  async getAdminHello(): Promise<string> {
    return this.adminService.getHello();
  }

  @Post('admin/setup')
  async setup(@Body("script") script: string): Promise<void> {
    this.adminService.setup(script);
  }

  @Post('admin/register')
  async register(@Body("name") name: string): Promise<Student> {
    return this.adminService.registerStudent(name);
  }

  @Get('admin/students')
  async getAllStudents(): Promise<Student[]> {
    return this.adminService.getAllStudents();
  }

  @Post('admin/question')
  async createQuestion(@Body("description") description: string, @Body("answer") answer: string): Promise<CreateQuestionDto> {
    const question = await this.adminService.createQuestion(description, answer);
    return new CreateQuestionDto(question.id, question.description);
  }
}
