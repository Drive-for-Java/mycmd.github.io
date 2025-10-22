import Image from "next/image";

export default function Home() {
  return (
    <div id="home" className="bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">MyCMD</h1>
            <p className="text-lg opacity-80">A custom command prompt implemented in Java that mirrors Windows cmd.exe with familiar commands and easy installers for Windows and Linux.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#install" className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm">Get Started</a>
              <a href="https://github.com/Drive-for-Java/MyCMD" target="_blank" className="inline-flex items-center rounded-full border px-5 py-2 text-sm">View on GitHub</a>
            </div>
            <div className="flex items-center gap-3 text-xs opacity-80">
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">Build: passing</span>
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">Java: 17+</span>
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">License: Apache</span>
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1">Windows | Linux</span>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-xl border bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
            <Image src="/terminal.svg" alt="Terminal" width={420} height={280} className="opacity-90" />
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-5"><h3 className="font-medium mb-2">Windows-like Commands</h3><p className="opacity-80">dir, cd, mkdir, del, copy, type, cls, help, exit and more.</p></div>
          <div className="rounded-lg border p-5"><h3 className="font-medium mb-2">Extensible</h3><p className="opacity-80">Add new commands by implementing simple Java classes.</p></div>
          <div className="rounded-lg border p-5"><h3 className="font-medium mb-2">Installers</h3><p className="opacity-80">Launch4j executable and Inno Setup installer for Windows. jpackage for Linux.</p></div>
          <div className="rounded-lg border p-5"><h3 className="font-medium mb-2">Cross-platform</h3><p className="opacity-80">Works on Windows and Linux with Java 17+.</p></div>
          <div className="rounded-lg border p-5"><h3 className="font-medium mb-2">Open Source</h3><p className="opacity-80">Apache License. Contributions welcome.</p></div>
          <div className="rounded-lg border p-5"><h3 className="font-medium mb-2">Simple Scripts</h3><p className="opacity-80">Build scripts for packaging and distribution are included.</p></div>
        </div>
      </section>

      <section id="structure" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Project Structure</h2>
        <pre className="rounded-lg border bg-black text-white p-4 overflow-x-auto text-xs leading-relaxed">
{`MyCMD/
 ┣ README.md
 ┣ pom.xml
 ┣ src/
 ┃ ┗ main/
 ┃    ┗ java/
 ┃       ┗ com/
 ┃          ┗ mycmd/
 ┃             ┣ App.java
 ┃             ┣ ShellContext.java
 ┃             ┣ Command.java
 ┃             ┗ commands/
 ┃                ┣ DirCommand.java
 ┃                ┣ CdCommand.java
 ┃                ┣ EchoCommand.java
 ┃                ┣ MkdirCommand.java
 ┃                ┣ RmdirCommand.java
 ┃                ┣ CopyCommand.java
 ┃                ┣ DelCommand.java
 ┃                ┣ TypeCommand.java
 ┃                ┣ ClsCommand.java
 ┃                ┣ HelpCommand.java
 ┃                ┣ ExitCommand.java
 ┃                ┗ VersionCommand.java
 ┣ icons/
 ┣ scripts/
 ┣ installer/
 ┗ dist/`}
        </pre>
      </section>

      <section id="install" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Installation</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-5">
            <h3 className="font-medium mb-2">Windows</h3>
            <pre className="bg-zinc-950 text-zinc-50 p-3 rounded text-xs overflow-x-auto">scripts\\build-windows.bat</pre>
            <p className="opacity-80 mt-3">Builds the JAR, wraps it into an .exe with Launch4j, and generates a setup.exe with Inno Setup.</p>
          </div>
          <div className="rounded-lg border p-5">
            <h3 className="font-medium mb-2">Linux</h3>
            <pre className="bg-zinc-950 text-zinc-50 p-3 rounded text-xs overflow-x-auto">chmod +x scripts/build-linux.sh
./scripts/build-linux.sh</pre>
            <p className="opacity-80 mt-3">Uses jpackage to build a .deb or .rpm package.</p>
          </div>
        </div>
      </section>

      <section id="usage" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Usage</h2>
        <pre className="rounded-lg border bg-black text-white p-4 overflow-x-auto text-xs leading-relaxed">
{`> dir
> cd ..
> mkdir test
> echo Hello World!
> type file.txt
> del file.txt
> help
> exit`}
        </pre>
      </section>

      <section id="contributing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Contributing</h2>
        <ol className="list-decimal pl-6 space-y-2 opacity-90">
          <li>Fork the repository</li>
          <li>Create a feature branch</li>
          <li>Commit your changes</li>
          <li>Open a Pull Request</li>
        </ol>
      </section>

      <section id="license" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold mb-3">License</h2>
        <p className="opacity-80">Apache License as per the original project.</p>
      </section>
    </div>
  );
}
