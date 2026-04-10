import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService){}
    @Get()
        getAllCourse():string{
            return this.courseService.getAllCourse();
        }
    
     @Get(':id')
        getCourseById(@Param('id')id: string):string{
            return this.courseService.getCourseById(id);
        }
     @Post()
     createCourse():string{
        return this.courseService.createCourse();
     }
     @Put(':id')
     updateCourse(@Param('id') id:string):string{
        return this.courseService.updateCourse(id);
     }
      @Patch(':id')
     patchCourse(@Param('id') id:string):string{
        return this.courseService.patchCourse(id);
     }
      @Delete(':id')
     deleteCourse(@Param('id') id:string):string{
        return this.courseService.deleteCourse(id);
     }

    }


