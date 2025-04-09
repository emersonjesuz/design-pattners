import { FiAlertCircle, FiBattery } from "react-icons/fi";
import { Notification } from "./notification";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Notification.root>
        <Notification.icon icon={FiAlertCircle} />
        <Notification.content text="Voce recebeu um convite para fazer parte da empresa Rocketseat." />
        <Notification.actions>
          <Notification.action icon={FiAlertCircle} />
          <Notification.action
            className="dark:bg-violet-500"
            icon={FiBattery}
          />
        </Notification.actions>
      </Notification.root>
    </div>
  );
}
