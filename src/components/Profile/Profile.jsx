import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats,
}) => {
  return (
    <div className={css.container}>
      <div className={css.titleContainer}>
        <img
          className={css.image}
          src={image}
          alt="User avatar"
        />
        <p className={css.title}>{name}</p>
        <p className={css.subtitle}>@{tag}</p>
        <p className={css.subtitle}>{location}</p>
      </div>

      <ul className={css.infoContainer}>
        <li className={css.listItem}>
          <span className={css.infoTitle}>
            Followers
          </span>
          <span className={css.infoSubtitle}>
            {stats.followers}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.infoTitle}>
            Views
          </span>
          <span className={css.infoSubtitle}>
            {stats.views}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.infoTitle}>
            Likes
          </span>
          <span className={css.infoSubtitle}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
