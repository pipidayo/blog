export default function ExampleComponent() {
  return (
    <div className='main-container'>
      {/* ナビゲーション */}
      <nav className='nav-container'>
        <a href='/' className='nav-link'>
          Home
        </a>
        <a href='/blog' className='nav-link'>
          Blog
        </a>
      </nav>

      {/* テキストボックス */}
      <div className='card'>
        <input type='text' className='text-input' placeholder='検索...' />
      </div>

      {/* リンクカード */}
      <div className='grid-container'>
        <a href='/post-1' className='link-card'>
          <h3 className='text-xl font-bold mb-2'>記事タイトル</h3>
          <p className='text-gray-600 dark:text-gray-300'>記事の説明...</p>
        </a>
        {/* 他のカード */}
      </div>

      {/* ボタン */}
      <button className='button'>もっと見る</button>
    </div>
  )
}
