### Introduction

Given that Pisgah will be a comprehensive component framework, we welcome contributions from anyone 
who is willing to use the framework and provide useful and meaningful contributions assuming they are
within the adopted paradigm chosen for this framework. 

### Git Code Submissions 

If you want to make a contribution we have expectations around how you submit your Pull Requests. 
Please ensure you have followed the below instructions when checking out the source code and keeping
in sync with the upstream fork of the repository. We assume you have created a fork of `pisgah` as 
we do not allow any user to commit directly to our upstream repository. 

Here are the exact commands that I run to initialize my local checkout / clone of the repository.

```
orange:src adamparrish$ git clone git@github.com:neosavvyinc/pisgah.git
Cloning into 'pisgah'...
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (5/5), done.
orange:src adamparrish$ cd pisgah/
orange:pisgah adamparrish$ ls
LICENSE		README.md
orange:pisgah adamparrish$ git remote -v
origin	git@github.com:neosavvyinc/pisgah.git (fetch)
origin	git@github.com:neosavvyinc/pisgah.git (push)
orange:pisgah adamparrish$ git remote rename origin upstream
orange:pisgah adamparrish$ git remote add origin git@github.com:neosavvy/pisgah.git
```

Please ensure your output from `git remote -v` looks like this
```
orange:pisgah adamparrish$ git remote -v
origin	git@github.com:neosavvy/pisgah.git (fetch)
origin	git@github.com:neosavvy/pisgah.git (push)
upstream	git@github.com:neosavvyinc/pisgah.git (fetch)
upstream	git@github.com:neosavvyinc/pisgah.git (push)
```

We additionally assume that all of your commits have a common commit message template used and that
all commits are squashed into meaningful units of work. We will not merge to upstream any pull request
that contains merge commits and has not been properly rebased off upstream/master. 

Please take a look at my [Fool Proof Rebase Strategy](https://gist.github.com/neosavvy/b2461a10f7d1f33a9f5b343fd0e2badd)
to learn more about how this project will be accepting work from pull requests. 
