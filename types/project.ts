export interface IProjectCategory {
    id: string
    name: string
    icon: {
        id: string
        type: string
        file_name: string
        file: string
        file_size: string
    }
    background_color: string
}
export interface IProject {
    id: number
    title: string
    company: {
        id: string
        name: string
        brand_logo: object
    }
    category: IProjectCategory
    target_money: string
    gained_money: string
    gained_money_in_percent: number
    about: string
    is_favorite: boolean
    user_donation_amount: string
    donation_count: number
    share_count: number
    comment_count: number
    views_count: number
    is_active: number
    is_project_report_ready: string
    is_following_company: boolean
    created_at: string
    end_time: string
    status: number
}
