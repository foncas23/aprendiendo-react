export function TwitterFollowCard({ username, name, isFollowing }) {
    console.log(isFollowing)
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={`https://unavatar.io/twitter/${username}`} />
                <div className="tw-followCard-info ">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName"></span>
                </div>
            </header>

            <aside>
                <button className="tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}