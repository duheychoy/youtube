import { type FC } from 'react';

const App: FC = () => {
  const resources = [
    {
      url: "https://youtu.be/FKXRiAiQFiY?si=S_AUcYBRC2GZz2y1",
      name: "程式與網頁開發者必備技能！ Git 和 GitHub 零基礎快速上手，輕鬆掌握版本控制的訣竅！",
      description: "幫助程式與網頁開發者快速掌握Git和GitHub相關的版本控制關鍵知識。"
    },
    {
      url: "https://www.youtube.com/watch?v=AFMoQqH6t3A",
      name: "拯救資工系學生的基本素養—如何用 Git & Github 與他人合作開發",
      description: "講解資工系學生如何利用Git和Github進行協作開發，提升基本素養"
    },
    {
      url: "https://www.youtube.com/watch?v=uegeSwdfWjQ",
      name: "【GitHub Pages】免費靜態網頁代管　免費架設屬於自己的個人網站｜使用有什麼限制？如何使用自己的網域？如何一次改整個賬號的域名",
      description: "介紹GitHub Pages相關內容，包括免費靜態網頁代管、使用限制以及網域相關操作等知識。"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Git & GitHub Resources</h1>
        <div className="space-y-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{resource.name}</h2>
              <p className="text-gray-600 mb-3">{resource.description}</p>
              <div className="flex flex-col space-y-2">
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Watch Video
                </a>
                <span className="text-gray-500 text-sm break-all">{resource.url}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;