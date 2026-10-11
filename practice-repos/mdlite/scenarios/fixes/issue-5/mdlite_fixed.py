import re
import html


def render(text):
    lines = text.split("\n")
    output = []
    i = 0
    while i < len(lines):
        line = lines[i]

        if line.startswith("# "):
            output.append(f"<h1>{_inline(line[2:])}</h1>")
            i += 1
        elif line.startswith("## "):
            output.append(f"<h2>{_inline(line[3:])}</h2>")
            i += 1
        elif line.startswith("### "):
            output.append(f"<h3>{_inline(line[4:])}</h3>")
            i += 1
        elif line.startswith("- "):
            items = []
            while i < len(lines) and lines[i].startswith("- "):
                items.append(f"<li>{_inline(lines[i][2:])}</li>")
                i += 1
            output.append("<ul>" + "".join(items) + "</ul>")
        elif line.strip() == "":
            i += 1
        else:
            output.append(f"<p>{_inline(line)}</p>")
            i += 1

    return "\n".join(output)


def _inline(text):
    text = html.escape(text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"__(.+?)__", r"<strong>\1</strong>", text)
    text = re.sub(r"\*(.+?)\*", r"<em>\1</em>", text)
    text = re.sub(r"`(.+?)`", r"<code>\1</code>", text)
    text = re.sub(r"\[(.+?)\]\((.+?)\)", r'<a href="\2">\1</a>', text)
    return text
