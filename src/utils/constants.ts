export enum UserType {
    EH='EH',
    WX='WX',
    CND='CND'
}
export enum APIHeaderWW {
    REQ_ADD_CANDIDATE_WW = 'add_candidate',
}
export enum APIHeaderWX {
    REQ_ADD_CONTACT_WNX = 'add_wenex_contact_form',
    REQ_GET_ALL_METADATA = 'get_all_metadata',
    REQ_ADD_METADATA = 'add_metadata',
    REQ_GET_METADATA_BY_ID = 'get_metadata_by_id',
    REQ_UPDATE_METADATA = 'update_metadata',
    REQ_USER_AUTH_REGISTER = 'user_auth_register',
    REQ_FORGOT_PASSWORD = 'forgot_password',
    REQ_GET_WENEX_CONTACT_BY_ID = 'get_wenex_contact_by_Id',
    REQ_ADD_EXT_ORG = 'add_ext_org',
    REQ_UPDATE_EXT_ORG = 'update_ext_org',
    REQ_GET_EXT_ORG_BY_ID = 'get_ext_org_by_id',
    REQ_GET_ALL_EXT_ORG = 'get_all_ext_org',
    REQ_GET_ALL_CONTACT = 'get_all_contact',
    REQ_UPDATE_CONTACT = 'update_contact',
}

export enum APIHeaderEH{
    REQ_ADD_JOB_POSITION = 'add_job_position',
    REQ_ADD_EH_CLIENT = 'add_eh_client',
    REQ_UPDATE_JOB_POSITION = 'update_job_position',
    REQ_GET_JOB_POSITION = 'get_job_position_by_id',
    REQ_GET_ALL_JOB_POSITION = 'get_all_job_positions',
    REQ_GET_ALL_EH_CLIENTS = 'get_all_eh_clients',
    REQ_GET_EH_CLIENT_BY_ID = 'get_eh_client_by_id',
    REQ_DEL_EH_CLIENT = 'delete_eh_client',
}

export enum APIHeaderCommon{
    USER_LOGIN = 'user_login',
    REQ_VERIFY_USER = 'verify_user',
    REQ_VERIFY_OTP = 'verify_otp',
    REQ_GENERATE_OTP = 'generate_otp',
    REQ_ADD_FIRST_USER = 'add_first_user',
    REQ_ADD_USER = 'add_user',
    REQ_UPDATE_PASSWORD = 'update_password',
    REQ_USER_PROFILE_INFO = 'user_profile_info',
}
export enum APIPAram{
    DIALING_META = 'dialing_code_meta',
    DIFF_ABLED_META = 'diff_abled_meta',
    EXT_ORG_META = 'ext_org_meta',
    JOB_TITLE_META = 'job_title_meta',
    SKILLS_META = 'skills_meta',
    COLLEGE_META = 'college_meta',
    COURSE_META = 'course_meta',
    CITY_META = 'city_meta',
}
export enum APIWWResumeUpdate {
    UPDATE_CONTACT = 'update_candidate_about_me'
}
export enum WenexResponse {
    WW_REGISTER_RECORD_EXIST = 'Record already exist',
    WW_DATA_ADDED = 'Data added successfully',
}
