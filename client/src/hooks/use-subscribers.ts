import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function useCreateSubscriber() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: { email: string }) => {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Access Granted",
        description: "You have been added to the priority waitlist.",
        variant: "default",
        className: "bg-primary/10 border-primary text-primary-foreground font-rajdhani",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Access Denied",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
