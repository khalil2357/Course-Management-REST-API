import { CourseService } from './course.service';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourse(): string;
    getCourseById(id: string): string;
    createCourse(): string;
    updateCourse(id: string): string;
    patchCourse(id: string): string;
    deleteCourse(id: string): string;
}
