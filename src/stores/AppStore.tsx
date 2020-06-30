import { observable } from 'mobx';

import { CourseCalendarStore } from './CourseCalendarStore';
import { CourseInformationStore } from './CourseInformationStore';

export interface AppStore {
    courseCalendar: CourseCalendarStore;
    courseInformation: CourseInformationStore;
}

export class AppStoreImpl implements AppStore {
    @observable.deep public courseCalendar: CourseCalendarStore;
    @observable.deep public courseInformation: CourseInformationStore;

    public constructor() {
        this.courseCalendar = new CourseCalendarStore();
        this.courseInformation = new CourseInformationStore();
    }
}
