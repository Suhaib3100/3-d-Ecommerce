import clsx from "clsx";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  className?: string;
};

export default function CircleText({
  textColor = "#1A871D",
  backgroundColor = "#FFFCFA",
  className,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 123 123"
      className={clsx("circle-text", className)}
      aria-labelledby="circle-text"
    >
      <title id="circle-text">Love to build. Powered by Suhaib.</title>
      <path
        fill={backgroundColor}
        d="M122 61.5a61 61 0 11-122 0 61 61 0 01122 0z"
      ></path>
      <path
        fill={textColor}
        className="animate-spin-slow origin-center"
        d="M83.7 27.8l-5.3-3.4c-.4-.2-.5-.5-.3-1l5.1-9.3c.3-.4.6-.5 1-.3l1.1.6c.5.2.6.6.3 1l-4.3 7.8 3.7 2.3.4.4-.1.6-.6 1c-.2.4-.5.5-1 .3zm4 3.4a4.7 4.7 0 01-1.5-2.1c-.3-.8-.3-1.6-.1-2.4.2-.8.6-1.6 1.2-2.3.6-.7 1.3-1.2 2-1.5.8-.4 1.6-.4 2.4-.3.8.1 1.6.5 2.3 1.1a4.3 4.3 0 011.6 4.5c-.2.8-.6 1.6-1.2 2.3-.6.7-1.3 1.2-2 1.5a4.4 4.4 0 01-4.7-.8zm1.7-2c.5.3 1 .5 1.5.5s1-.3 1.5-.9c.5-.6.8-1.2.7-1.7-.1-.5-.4-1-.8-1.3-.5-.4-1-.6-1.5-.6s-1 .3-1.5 1c-.5.5-.8 1-.7 1.6.1.5.4 1 .8 1.3zm5 9l-.8-1.1c-.2-.2-.2-.4-.2-.5l.2-.6 3.6-7c.2-.4.3-.6.5-.6l.6.3.9.5c.3.1.4.3.4.5l-.3.8-2.5 4.7 5.4-2c.4 0 .6-.1.8 0 .2 0 .3.2.4.5l.4 1c.1.3.2.6.1.7l-.6.3-7.8 2.8H95a1 1 0 01-.5-.3zm3.8 7c-.4-.9-.6-1.8-.5-2.6 0-.8.3-1.6.8-2.3.5-.7 1.2-1.2 2-1.6.9-.4 1.7-.6 2.5-.6s1.6.2 2.3.7c.7.4 1.2 1 1.7 2 .3.8.5 1.5.4 2.2 0 .7-.3 1.3-.7 1.9-.4.5-1 1-1.8 1.4a2 2 0 01-.8.2c-.2 0-.4-.1-.6-.4l-2.7-4.5c-.3.4-.5.8-.5 1.3a2.9 2.9 0 001 2.5l.9.7.2.3c0 .2 0 .3-.2.5l-.7.7-.4.3h-.4a5 5 0 01-1.4-1.2c-.5-.4-.8-1-1-1.5zm6.5-3.5a2 2 0 00-.8-1h-1.3l1.8 2.9c.2-.3.4-.5.5-.9 0-.3 0-.6-.2-1zm-7 14.6v-2c0-.7.2-1.3.5-1.8.1-.2.2-.3.4-.3h.4l1.2.4c.2 0 .4 0 .5.2.1 0 .2.2 0 .4a10.2 10.2 0 00-.3 1.8v.9l.3.9.6.5c.3.1.6.2 1 0l1.4-.1c-.6-.3-1.1-.7-1.5-1.1-.3-.5-.5-1-.6-1.6a3 3 0 01.6-2.3c.5-.7 1.4-1.2 2.7-1.4l5-.7c.4-.1.7 0 .8.6l.1 1c.1.6 0 .9-.6 1l-4 .6c-.7 0-1.2.3-1.5.6-.3.3-.4.7-.3 1.1 0 .4.2.8.4 1 .3.3.6.5 1 .6h1.4l3.2-.5c.5 0 .8.2.8.6l.2 1.2c0 .4-.1.7-.6.8l-8.3 1.3c-1 .2-1.8.1-2.5-.2-.6-.3-1.1-.7-1.5-1.3-.4-.6-.6-1.4-.8-2.2zm4.1 8.7a4.3 4.3 0 012.7-4c.7-.2 1.6-.3 2.5-.2 1 0 1.8.3 2.5.7.7.4 1.2 1 1.6 1.8.4.7.5 1.5.4 2.5a4.3 4.3 0 01-2.7 4c-.7.3-1.6.4-2.5.3-1 0-1.7-.3-2.4-.7a4.4 4.4 0 01-2.1-4.3zm2.7.3c0 .6 0 1 .4 1.5.3.4.8.7 1.6.7s1.4 0 1.7-.5c.4-.3.6-.8.6-1.4 0-.6 0-1-.3-1.5-.3-.4-.9-.7-1.7-.7-.8 0-1.4 0-1.7.5-.4.3-.6.8-.6 1.4zm-4 10.7l.6.2c-.4-.5-.7-1-.8-1.6l.1-1.7A3 3 0 01102 71c.7-.3 1.8-.3 3 0l4.8 1.5c.5.2.6.5.5 1l-.3 1c-.2.5-.5.7-1 .5l-3.9-1.2c-.6-.2-1.2-.2-1.6 0-.4 0-.6.4-.7.8-.2.4-.2.7-.1 1 0 .4.3.7.6 1 .3.3.7.5 1.2.7l4.2 1.3c.5.1.6.4.5.9l-.3 1c-.2.5-.5.7-1 .6l-8.2-2.6c-.5-.1-.6-.4-.5-1l.4-1c.1-.5.4-.6.9-.5zM98 81.7c-.5-.3-.6-.6-.3-1l.5-1c.3-.5.6-.6 1-.3l7.7 4.2c.5.2.6.6.3 1l-.5 1c-.3.4-.6.5-1 .3l-1.4-.8c.3.6.5 1 .5 1.6a2.5 2.5 0 01-.6 1.9l-.4.3h-.4l-1.8-1.2-.2-.3s0-.2.2-.3a5.5 5.5 0 00.7-1c.2-.4.3-1 .1-1.4-.2-.5-.6-1-1.2-1.3L98 81.7zM93.4 92a2 2 0 00-.6 1.1c0 .4 0 .7.2 1.1.1.4.4.7.8 1.1l.7.7.8-.5.7-.7c.4-.4.6-.9.7-1.4 0-.5-.3-1-.8-1.5-.2-.2-.5-.4-.8-.4h-.9c-.3.1-.6.3-.8.6zM88 87.6l1.5-1.3c.6-.3 1.2-.6 1.8-.7l.4.1.2.4.5 1.1v.5c0 .1 0 .2-.2.2a5.5 5.5 0 00-1.5 1c-.3.1-.5.3-.7.6l-.6.7v.8c0 .3.2.6.5.9l.8.7c0-.5 0-1 .2-1.4a3.9 3.9 0 014.6-2.3c.8.2 1.4.6 2.1 1.2a5 5 0 011.4 2.2c.3.8.3 1.5 0 2.3-.1.8-.5 1.5-1.1 2.2a7.7 7.7 0 01-1.5 1.2l.2.1c.3.3.4.7 0 1l-.8.9c-.3.3-.6.4-1 0L88 93.5a4.3 4.3 0 01-1.4-2c-.2-.7-.1-1.4.1-2 .3-.7.7-1.4 1.3-2zm-5.3 10.2l.4.6c0-.7 0-1.3.4-1.8.3-.5.7-1 1.1-1.2a3 3 0 012.4-.5c.8.2 1.6.9 2.4 2L92 101c.3.4.2.8-.2 1l-1 .7c-.4.2-.7.2-1-.2L87.7 99c-.4-.5-.8-.9-1.2-1-.4-.2-.8-.1-1.1.1-.4.3-.6.5-.8.9-.2.3-.2.6-.1 1 0 .4.2.9.5 1.3l2.4 3.7c.3.4.2.8-.2 1l-1 .6c-.3.3-.7.3-1-.2l-4.7-7.1c-.3-.5-.2-.8.2-1l1-.7c.4-.3.7-.2 1 .2zm-10 4.4c.2-.5.6-.9 1.1-1.3l1.5-.8a3 3 0 012.6 0c.7.4 1.3 1.1 1.8 2.3l.9 2.3 1-.4h.4l.3.4.5 1.4v.5l-.3.3-1 .3.8 2c.2.3 0 .6-.3.7l-1.4.6c-.3.1-.6 0-.7-.4l-.8-2-2.6.7H76a.7.7 0 01-.2-.3l-.6-1.4v-.5c.1-.2.2-.3.4-.3l2.5-.8-.7-1.7c-.2-.5-.5-.9-.8-1-.3-.2-.6-.1-1 0-.2 0-.4.2-.6.4l-.5.6c0 .2-.2.2-.4.2l-.4-.2-.8-.9-.3-.3v-.4zm-34.8-6.3l5.3 3.4c.4.3.5.6.2 1l-5.3 9.3c-.3.4-.6.5-1 .2l-1.1-.6c-.4-.2-.5-.6-.3-1l4.5-7.7-3.6-2.4-.4-.4.1-.6.6-1c.3-.4.6-.5 1-.2zM34 92.4c.8.6 1.3 1.4 1.5 2.1.2.8.3 1.6 0 2.4a5.5 5.5 0 01-3.3 3.7c-.8.4-1.6.4-2.4.3-.8-.2-1.5-.6-2.3-1.2a4.7 4.7 0 01-1.4-2.2c-.2-.7-.3-1.5 0-2.3.2-.8.6-1.6 1.2-2.3.6-.7 1.3-1.2 2.1-1.5a4.4 4.4 0 014.7 1zm-1.7 2c-.5-.4-1-.6-1.5-.6s-1 .3-1.5.9c-.6.5-.8 1.1-.7 1.6 0 .5.3 1 .7 1.4.5.3 1 .6 1.5.6s1-.3 1.5-.9c.6-.6.8-1.1.7-1.6 0-.6-.3-1-.7-1.4zm-4.9-9.2l.9 1.1.2.5-.3.7-3.7 7-.5.4-.7-.3-.8-.5c-.3-.2-.4-.3-.4-.5l.3-.8 2.7-4.7-5.5 1.9c-.4 0-.7.1-.8 0-.2 0-.4-.2-.5-.5l-.3-1c-.1-.4-.2-.6 0-.7 0-.1.2-.3.5-.4l7.9-2.5h.6c.2 0 .3.1.4.3zm-3.6-7.1c.4 1 .6 1.8.5 2.6 0 .9-.4 1.6-.9 2.3-.5.7-1.2 1.2-2 1.6-.9.3-1.7.5-2.5.5s-1.6-.3-2.3-.7a4.8 4.8 0 01-1.6-2.1c-.4-.8-.5-1.5-.4-2.2 0-.7.3-1.3.7-1.8.5-.6 1-1 1.9-1.4.3-.2.6-.2.8-.2.2 0 .3.1.5.4l2.7 4.5c.3-.3.5-.7.5-1.2a2.9 2.9 0 00-1-2.5L20 77c-.2 0-.2-.2-.2-.3 0-.2 0-.3.2-.4l.7-.8.4-.3h.4c.5.4 1 .7 1.4 1.2.4.5.8 1 1 1.6zm-6.5 3.4c.1.4.4.7.8 1h1.3l-1.7-2.9c-.3.2-.5.5-.6.8 0 .4 0 .7.2 1zM24.6 67v2c0 .7-.3 1.3-.6 1.8l-.3.3h-.5l-1.1-.4-.6-.2c-.1 0-.1-.2 0-.4a10 10 0 00.4-1.8v-.9c0-.4-.2-.6-.3-.9-.1-.3-.3-.4-.6-.6h-1l-1.3.1a3.6 3.6 0 012 2.7 3 3 0 01-.6 2.4c-.6.6-1.5 1-2.9 1.2l-4.9.7c-.4 0-.7-.1-.8-.6l-.1-1.2c-.1-.4.1-.7.6-.8l4-.5c.7-.1 1.2-.3 1.5-.6.3-.3.4-.7.4-1.1 0-.4-.2-.8-.4-1-.2-.3-.5-.5-1-.7h-1.4l-3.2.4c-.5 0-.8-.1-.8-.6l-.2-1.1c0-.5.2-.8.7-.9l8.3-1c1-.2 1.8-.1 2.4.2.7.3 1.2.7 1.6 1.4l.7 2.1zm-3.9-8.8c0 1-.4 1.8-.9 2.4-.5.7-1 1.2-1.9 1.5-.7.3-1.6.4-2.5.3-1-.1-1.8-.4-2.5-.8-.7-.5-1.2-1-1.5-1.8-.4-.7-.5-1.6-.4-2.6 0-1 .4-1.7.9-2.4.4-.7 1-1.1 1.8-1.4.8-.3 1.7-.4 2.6-.4 1 .1 1.7.4 2.4.9a4.4 4.4 0 012 4.3zm-2.7-.3c0-.5 0-1-.3-1.5-.3-.4-.9-.7-1.6-.8-.8 0-1.4.1-1.8.5-.4.4-.6.8-.6 1.4 0 .6 0 1 .3 1.5.3.4.9.7 1.6.8.8 0 1.4-.1 1.8-.5.4-.3.6-.8.6-1.4zm4.3-10.7l-.7-.2c.5.5.7 1.1.8 1.7l-.1 1.6a3 3 0 01-1.6 1.9c-.8.4-1.8.3-3.1-.1l-4.7-1.6c-.5-.1-.6-.4-.5-1l.4-1c.1-.4.5-.6 1-.4l3.8 1.3c.7.2 1.2.2 1.6 0 .4 0 .6-.3.8-.8v-1c0-.4-.2-.7-.5-1-.3-.3-.7-.5-1.2-.7L14 44.5c-.5-.1-.6-.4-.5-1l.4-1c.2-.5.5-.6 1-.5l8.1 2.8c.5.1.6.4.5 1l-.4 1c-.1.4-.5.6-1 .4zm2.7-5.5c.4.2.4.5.2 1l-.6 1c-.2.4-.6.5-1 .2L16 39.5c-.4-.2-.5-.6-.3-1l.6-1c.2-.4.6-.5 1-.2l1.4.7c-.3-.5-.5-1-.5-1.5a2.5 2.5 0 01.7-1.9l.4-.3h.4l1.7 1.3.2.2-.2.4a5.2 5.2 0 00-.7 1c-.3.4-.3.8-.1 1.3.1.5.5 1 1.2 1.3l3.1 1.9zm5.5-7.7c.3.3.4.6 0 1l-.7 1c-.4.3-.7.3-1 0l-9.2-7.8c-.4-.3-.4-.6 0-1l.7-1c.3-.3.7-.3 1 0l9.2 7.8zm-5.2-8.3c-.3.3-.7.4-1.1.4-.5 0-.9-.2-1.2-.5-.3-.3-.4-.7-.4-1.1 0-.5.1-.8.4-1.1.4-.3.7-.5 1.2-.5.4 0 .8.2 1 .5.4.3.5.7.5 1.1 0 .5-.1.8-.4 1.2zm7.6 5.8c.3.4.3.7 0 1l-.8.9c-.4.3-.7.3-1 0L25.7 28c-.4-.3-.4-.7 0-1l.8-.8c.3-.4.7-.4 1 0l5.3 5.3zm3.7-2.1l-1.2 1h-.7v-.2L31 25.7l-1 .8c-.1.2-.3.2-.4.2a.8.8 0 01-.4-.3l-.9-1.2V25c-.2-.3 0-.5.2-.7l.9-.8-.4-.5a7.5 7.5 0 01-.4-.6c-.5-1-.7-1.9-.5-2.8.2-.9.8-1.6 1.7-2.2l.2-.2.2-.1a1.4 1.4 0 01.3-.2c.2 0 .4 0 .6.2l.2.2.5 1.2c.1.1.1.2 0 .4 0 0 0 .2-.2.3l-.4.3c-.5.3-.6.5-.6.9 0 .3.2.6.5 1l.2.4 1.7-1.4c.1-.2.3-.2.4-.2l.3.3 1 1.2v.5c0 .1 0 .3-.2.4L33 23.9l3.6 4.7c.1.2.2.3.1.5 0 0 0 .2-.2.3zm6.8-3.9c-1 .5-1.8.7-2.6.6-.9 0-1.6-.3-2.3-.7a5.2 5.2 0 01-1.7-2c-.4-.8-.6-1.6-.6-2.5 0-.8.1-1.6.6-2.3.4-.7 1-1.3 2-1.7.7-.4 1.4-.6 2.1-.5.7 0 1.3.2 2 .7.5.4 1 1 1.4 1.7l.2.8c0 .2 0 .4-.4.6L39.8 23l1.2.5a2.9 2.9 0 002.5-1.1l.7-1 .3-.2.4.2.8.7.3.4v.4a5 5 0 01-1.1 1.4c-.5.5-1 .9-1.5 1.1zm-3.7-6.4a2 2 0 00-1 .9v1.3l2.9-1.9c-.3-.2-.5-.4-.9-.4-.3-.1-.6 0-1 .1zm21 .2l-.7-.6c-2.5-2.1-4.1-3.6-4.1-5.3 0-1.5 1.1-2.6 2.6-2.6a3 3 0 012.2 1 3 3 0 012.1-1c1.5 0 2.7 1.1 2.7 2.6 0 1.7-1.7 3.2-4.1 5.3l-.7.6zm0 84.4l.7.6c2.4 2.2 4 3.6 4 5.4 0 1.4-1.1 2.5-2.6 2.5a3 3 0 01-2.1-1 3 3 0 01-2.2 1 2.6 2.6 0 01-2.6-2.5c0-1.8 1.6-3.2 4-5.4l.8-.6z"
      ></path>
    </svg>
  );
}
