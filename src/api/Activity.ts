export default class Activity{
    constructor(
        public activityName:string,
        public startDate:string[],
        public endDate:string[],
        public quota:number,
        public activityId?:string,
    ) {}
}