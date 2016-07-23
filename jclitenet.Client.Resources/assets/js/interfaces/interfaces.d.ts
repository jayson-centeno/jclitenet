interface IHomeProps {}
interface IHomeState {}

interface IAppProps { }
interface IAppState { }

interface IIndexProps { }
interface IIndexState { }

interface ILoginProps { }
interface ILoginState { isAuthenticated: boolean}

interface IHeaderSummaryProps
{
    name: string;
    title: string;
}

interface IProfileSummaryProps {}
interface IProfileSummaryState {}

interface IProfilePictureProps {}
interface IProfilePictureState {}

interface IInfoBoxWrapperProps {}
interface IInfoBoxWrapperState {}

interface IAddressIndustryInfoProps
{
    simpleAddress: string;
    industry: string;
}

interface ILatestJobProps {
    jobName: string;
}

interface IPreviousJobsProps {
    jobs: string;
}

interface IEducationProps { education: string; }
interface IEmailProps { email: string; }
interface IContactNumberProps { contact: string; }
interface ISkypeProps { skype: string; }

interface IIntroductionProps { introText:string }
interface IIntroductionStates { introText: string }

interface ILoader { isLoading: boolean }

interface IEducationModel { educationItems: Array<IEducationItem> }
interface IEducationsProps { model: IEducationModel }
interface IEducationsState extends ILoader {}

interface IEducationItem { id:number, schoolName: string, degree: string, courseName: string, dateTaken: string, dateEnded: string }
interface IEducationItemProps { education:IEducationItem, isLastItem:boolean }
interface IEducationItemState { }

interface ILoaderProps { isActive: boolean }

interface IWorkExperienceItem { id: number, position: string, companyName: string, workStarted: string, workEnded: string, simpleAddress: string, workDescription:string }
interface IWorkExperiencesModel { workExpericeItems: Array<IWorkExperienceItem> }

interface IWorkExperiencesProps { model: IWorkExperiencesModel }
interface IWorkExperiencesState extends ILoader { }

interface IWorkExperienceItemProps { workExperience: IWorkExperienceItem, isLastItem: boolean }

interface ISkillsModel { skills:Array<string> }
interface ISkillsProps { model: ISkillsModel }
interface ISkillsState extends ILoader { }

interface IContactsModel { email:string, address1:string, address2:string, mobile:string, homePhone:string }
interface IContactsProps { model: IContactsModel }
interface IContactsState extends ILoader { }

interface ILanguagesModel { languages:Array<ILanguageItem> }
interface ILanguagesProps { model:ILanguagesModel }
interface ILanguagesState extends ILoader { }

interface ILanguageModel { id: number, name: string, level: string }
interface ILanguageItem extends ILanguageModel { }
interface ILanguageItemProps { model: ILanguageItem }

interface ICertificationsProps { model: ICertificationsModel }
interface ICertificationState extends ILoader { }
interface ICertificationsModel { certifications: Array<ICertificationItem> }
interface ICertificationModel { id: number, title: string, expStartDate: Date, expEndDate: Date }
interface ICertificationItem extends ICertificationModel { }
interface ICertificationItemProp { model: ICertificationItem }

interface IInterestsProps { model: IInterestsModel }
interface IInterestsModel { interests:Array<string> }
interface IInterestState extends ILoader { }

interface IPersonalLinksProps { model: IPersonalLinksModel }
interface IPersonalLinkItemModel { id:number, name:string, link:string }
interface IPersonalLinksModel { personalLinks: Array<IPersonalLinkItemModel> }
interface IPersonalLinksState extends ILoader { }
interface IPersonalLinksItemProps { model: IPersonalLinkItemModel }

interface ISocialMediaModel { links: Array<string>; }
interface ISocialMediaProps { model:ISocialMediaModel  }
interface ISocialMediaState extends ILoader { }

interface IRegistrationModel { userName: string, email: string, password: string, confirmPassword: string }
interface IRegistrationState { model: IRegistrationModel, isRegistered: boolean }
interface IRegistrationFormProps { fields: any, handleSubmit: any, resetForm: any, submitting:any }