// https://github.com/trpfrog/trpfrog.net/blob/main/src/components/wrappers/A.tsx

import { forwardRef, useMemo } from "react";

import Link from "next/link";

import type { ComponentPropsWithRef } from "react";

const Anchor = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<"a">>(function Anchor({ href = "", ...rest }, ref) {
	const isInternal = href.startsWith("/");
	const openInNewTabProps = useMemo(() =>
		isInternal ? {} : {
			target: "_blank",
			rel: "noopener noreferrer",
		}, [isInternal]);
	return isInternal
		? <Link {...{ href, ref, ...rest, ...openInNewTabProps }} />
		: <a {...{ href, ref, ...openInNewTabProps, ...rest }} />;
});

export default Anchor;
