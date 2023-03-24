
export default function Root() {
    return (
        <div>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <a href={'/users/create'}>{"Create User"}</a>
                        </li>
                        <li>
                            <a href={'/users/'}>{"Read Users"}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
