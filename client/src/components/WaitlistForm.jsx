import { ArrowRight, LoaderCircle } from "lucide-react";
import { useWaitlist } from "../hooks/useWaitlist";

function WaitlistForm({ className = "" }) {
    const { email, setEmail, isEmailValid, isDuplicateLocal, isSubmitting, feedback, submit } =
        useWaitlist();

    const buttonDisabled = isSubmitting || !isEmailValid || isDuplicateLocal;

    return (
        <form onSubmit={submit} className={`w-full ${className}`} id="waitlist" noValidate>
            <div className="glass-panel flex flex-col gap-2.5 rounded-2xl p-2.5 sm:flex-row sm:items-center sm:p-3">
                <label htmlFor="email" className="sr-only">
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email for early access"
                    autoComplete="email"
                    className="h-14 w-full rounded-xl border border-slate-200/70 bg-white/90 px-5 text-[1rem] text-slate-900 outline-none ring-cyan/40 transition focus:ring-2"
                    required
                />

                <button
                    type="submit"
                    className="inline-flex h-14 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[190px]"
                    disabled={buttonDisabled}
                >
                    {isSubmitting ? (
                        <>
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                            Joining...
                        </>
                    ) : (
                        <>
                            Join Waitlist
                            <ArrowRight className="h-4 w-4" />
                        </>
                    )}
                </button>
            </div>

            {feedback.message ? (
                <p
                    className={`mt-3 text-sm font-medium ${feedback.type === "error" ? "text-red-600" : "text-pine"
                        }`}
                >
                    {feedback.message}
                </p>
            ) : null}
        </form>
    );
}

export default WaitlistForm;
