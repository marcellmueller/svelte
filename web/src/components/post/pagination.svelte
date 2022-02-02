<script>
  import { Icon } from '$components/';
  export let articlesCount,
    changePage,
    newArticles,
    page,
    perPage = 10;

  const pageNumbers = (page) => {
    let numbers = Math.ceil(articlesCount / perPage);
    let numbersArr = [];

    for (let i = 1; i < numbers + 1; i++) {
      numbersArr.push(i);
    }
    if (numbers > 5 && page >= numbers - 3) {
      numbersArr = numbersArr.splice(numbers - 5, 5);
    } else if (page > 4 && page < numbers) {
      numbersArr = numbersArr.splice(page - 3, 5);
    } else {
      numbersArr = numbersArr.slice(0, 5);
    }
    return numbersArr;
  };

  const numbersArr = pageNumbers(page);
  const disabled = 'lightgrey';
</script>

<div class="container">
  <div class="item">
    {#if page !== 1}
      <button
        class="nav"
        on:click={() => {
          newArticles && newArticles(page - 1);
          changePage && changePage(page - 1);
        }}
      >
        <Icon name="chevron-left" />
      </button>
    {:else}
      <button class="nav-disabled">
        <Icon name="chevron-left" color={disabled} />
      </button>
    {/if}
    <div class="page button-default">
      {#each numbersArr as number, i}
        <div>
          {#if page !== number}
            <button
              class="page button-default"
              on:click={() => {
                changePage && changePage(number);

                newArticles && newArticles(number);
              }}
            >
              {number}
            </button>
          {:else}
            <button class="page page-active">
              {number}
            </button>
          {/if}
        </div>
      {/each}
    </div>
    {#if articlesCount / (page * perPage) > 1}
      <button
        class="nav"
        on:click={() => {
          newArticles && newArticles(page + 1);
          changePage && changePage(page + 1);
        }}
      >
        <Icon name="chevron-right" />
      </button>
    {:else}
      <button class="nav-disabled">
        <Icon name="chevron-right" color={disabled} />
      </button>
    {/if}
  </div>
</div>

<style lang="scss">
  .container {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-top: 1px solid black;
  }

  .item {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  .nav {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    cursor: pointer;
  }

  .nav-disabled {
    opacity: 0.5;
    cursor: default;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
  }

  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    padding: 12px;
    font-size: 16px;
    line-height: 114.29%;
    letter-spacing: 0.01em;
    cursor: pointer;
  }

  .current-page {
    cursor: default;
  }

  .page-active {
    color: black;
  }

  button {
    border: none;
    background-color: inherit;
  }
</style>
