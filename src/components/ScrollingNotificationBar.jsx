const ScrollingNotificationBar = () => {
  const notifications = [
    "🚨 Abstract Submission Deadline Extended to April 20, 2025 (was April 15, 2025)",
    "📩 Submit your abstract to: conference.me@mitmuzaffarpur.org",
  ];

  return (
    <div className="w-full bg-blue-600 text-white py-2 overflow-hidden">
      <div className="relative whitespace-nowrap">
        <div className="inline-block animate-infinite-scroll">
          {[...notifications, ...notifications, ...notifications].map(
            (text, index) => (
              <span
                key={index}
                className="mx-8 text-sm font-medium inline-block"
              >
                {text}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
