import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import 'dotenv/config';
import { AdminModule } from './admin.module';
import { StudentModule } from './student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './model/question.entity';
import { Student } from './model/student.entity';
import { Score } from './model/score.entity';

@Module({
  imports: [
    AdminModule,
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
