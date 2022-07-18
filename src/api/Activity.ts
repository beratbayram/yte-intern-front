export default class Activity{
    constructor(
        public activityId:string,
        public activityName:string,
        public startDate:string[],
        public endDate:string[],
        public quota:number
    ) {}
}