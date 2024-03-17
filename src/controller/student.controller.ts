import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from 'src/service/student.service';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('student')
  async getStudentHello(): Promise<string> {
    return this.studentService.getHello();
  }

  @Post('student/run')
  async run(@Body("script") script: string): Promise<string> {
    return this.studentService.run(script);
  }

  @Post('student/submit')
  async submit(@Body("questionId") questionId: string, @Body("script") script: string): Promise<string> {
    return this.studentService.submit(Number(questionId), script);
  }
}
