// https://github.com/trpfrog/trpfrog.net/blob/main/src/components/wrappers/A.tsx

import { forwardRef } from "react";

import Link from "next/link";

import type { MakeRequired } from "@/lib/utils";
import type { ComponentPropsWithRef } from "react";

const openInNewTabProps = { target: "_blank", rel: "noopener noreferrer" };
const Anchor = forwardRef<
	HTMLAnchorElement,
	MakeRequired<Omit<ComponentPropsWithRef<"a">, keyof typeof openInNewTabProps>, "href" | "children">
>(function Anchor({ href, ...rest }, ref) {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return "/#".includes(href[0]!)
		? <Link {...{ href, ref, ...rest }} />
		: <a {...{ href, ref, ...openInNewTabProps, ...rest }} />;
});

export default Anchor;
