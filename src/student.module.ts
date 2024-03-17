import { Module } from '@nestjs/common';
import { StudentService } from './service/student.service';
import { StudentController } from './controller/student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        name: "student",
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'leaderboard_student',
        password: process.env.LEADERBOARD_STUDENT_PASSWORD,
        database: 'leaderboard_test',
        entities: [],
        synchronize: false,
        logging: true,
      }),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}