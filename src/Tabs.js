import { useState } from "react";

function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(items[0].value);
  return (
    <div className="tabs">
      <div className="tabs-list">
        {items.map((tab) => (
          <button
            key={tab.value}
            className={[
              "tab-list-item",
              tab.value === activeTab && "active-tab"
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {items.map((tab) => (
          <div key={tab.value} hidden={tab.value !== activeTab}>
            {tab.panel}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
