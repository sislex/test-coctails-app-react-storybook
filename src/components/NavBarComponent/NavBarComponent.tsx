import './NavBarComponent.scss';

export function NavBarComponent() {
    return (
        <header className="navbar sticky-top">

            <div className="logo">
                <p>Logo</p>
            </div>

            <div className="sidebar-button">
                <button aria-label="Open menu" className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z"/>
                    </svg>
                </button>
            </div>

        </header>
    );
}