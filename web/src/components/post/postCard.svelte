<script>
  import { format } from 'date-fns';
  import { Image } from '$components';
  export let post;
  const { author, category, date, slug, title } = post;
  const { image } = category;
</script>

<a href={`/posts/${slug.current}`}>
  <div class="container">
    <div class="content">
      <h2 class="headline-2">
        {title}
      </h2>
      <div class="details">
        {author.name}
        {date && ' / '}
        {format(new Date(date), 'LLLL d, yyyy')}
        {category.title && ' / '}
        <a href={`/category/${category.slug.current}`}>{category.title}</a>
      </div>
    </div>
    <div class="thumbnail">
      <Image alt={image.alt} {image} aspectRatio={9 / 16} />
    </div>
  </div>
</a>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    background-color: grey;
    max-width: 680px;
    margin: 1em auto;
    padding: 16px;
    border-radius: 4px;
    transition: all 200ms ease-out;
  }

  .container:hover {
    transform: scale(1.02);
  }

  .thumbnail {
    width: 300px;
  }

  .content {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .details {
    display: flex;
    flex-direction: row;
    font-size: 14px;
  }
</style>
