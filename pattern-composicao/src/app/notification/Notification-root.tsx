interface NotificationRootProps {
  children: React.ReactNode;
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-start gap-8">
      {children}
    </div>
  );
}
