export interface IViewState {
    isSidebarOpen: boolean;
    errorPopups: IPopupError[];
}

export interface IPopupError {
    id: string;
    message: string;
}
