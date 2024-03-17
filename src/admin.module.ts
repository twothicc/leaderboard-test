import { Module } from '@nestjs/common';
import { AdminService } from './service/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './model/question.entity';
import { Student } from './model/student.entity';
import { Score } from './model/score.entity';
import { AdminController } from './controller/admin.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: "admin",
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'leaderboard_admin',
      password: process.env.LEADERBOARD_ADMIN_PASSWORD,
      database: 'leaderboard_test',
      entities: [Question, Student, Score],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([Question, Student, Score], "admin"),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}